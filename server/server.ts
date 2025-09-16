import path from 'path';
import fs from 'fs';
import express, { Request, Response } from 'express';
import cors from 'cors';
import multer from 'multer';

import { formatAge, countAge } from './utils';
import { TUser, TRegisterData, TUserCard, TUserDataUpdate } from './types';

const app = express();

const PORT = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/db/uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, filename);
  }
});

const upload = multer({ storage });

const staticPath = path.join(__dirname, '../public/db');
const uploadsPath = 'http://localhost:3000/uploads';

app.use(express.static(staticPath));
app.use(express.json());
app.use(cors());

const error = {
  error: 'Что-то пошло не так'
};

app.post(
  '/register',
  upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'photos', maxCount: undefined }
  ]),
  (req: Request<{}, {}, TRegisterData>, res: Response) => {
    const { avatar, photos } = req.files as {
      photos?: Express.Multer.File[];
      avatar?: Express.Multer.File[];
    };
    const formData = req.body;

    fs.readFile(`${staticPath}/users.json`, 'utf-8', (err, fileData) => {
      if (err) return res.status(500).json(error);

      try {
        const jsonData: { data: TUser[] } = JSON.parse(fileData);

        const isEmailExist = jsonData.data.find(
          (user) => user.email === formData.email
        );
        if (isEmailExist) throw new Error('');

        const userCard: TUserCard = {
          _id: String(Date.now()),
          name: formData.name,
          age: formatAge(countAge(formData.age)),
          gender: formData.gender,
          description: formData.description,
          city: formData.city,
          skillName: formData.skillName,
          skillId: formData.skillId,
          skillWants: [...formData.skillWants],
          avatar: avatar
            ? `${uploadsPath}/${avatar[0].filename}`
            : `${uploadsPath}/unknown.jpg`,
          photos: photos
            ? photos.map((photo) => `${uploadsPath}/${photo.filename}`)
            : []
        };

        const user: TUser = {
          ...formData,
          skillWants: [...formData.skillWants],
          favorites: [],
          userCard
        };

        jsonData.data.push(user);

        fs.writeFile(
          `${staticPath}/users.json`,
          JSON.stringify(jsonData, null, 2),
          (writeError) => {
            if (writeError) return res.status(500).json(error);

            fs.readFile(
              `${staticPath}/userCards.json`,
              'utf-8',
              (err, fileData) => {
                if (err) throw new Error('');

                const userCardsData: { data: TUserCard[] } =
                  JSON.parse(fileData);
                userCardsData.data.push(userCard);

                fs.writeFile(
                  `${staticPath}/userCards.json`,
                  JSON.stringify(userCardsData, null, 2),
                  (writeError) => {
                    if (writeError) return res.status(500).json(error);

                    return res.status(200).json({
                      success: true,
                      data: user
                    });
                  }
                );
              }
            );
          }
        );
      } catch (err) {
        return /Error/.test(String(err))
          ? res.status(401).json({
              error: 'Пользователь c такой почтой уже существует '
            })
          : res.status(500).json(error);
      }
    });
  }
);

app.patch(
  '/updateUser',
  upload.fields([{ name: 'avatar', maxCount: 1 }]),
  (req: Request<{}, {}, TUserDataUpdate>, res: Response) => {
    const { authorization } = req.headers;
    const userUpdateData = req.body;

    const { avatar } = req.files as {
      avatar?: Express.Multer.File[];
    };

    if (authorization === 'null') {
      return res.status(403).json(error);
    }

    fs.readFile(`${staticPath}/users.json`, 'utf-8', (err, fileData) => {
      if (err) return res.status(500).json(error);

      try {
        const usersData: { data: TUser[] } = JSON.parse(fileData);

        if (userUpdateData.email && userUpdateData.email !== authorization) {
          if (
            usersData.data.filter((user) => user.email === userUpdateData.email)
              .length > 1
          ) {
            throw new Error('');
          }
        }

        const userIndex = usersData.data.findIndex(
          (user) => user.email === authorization
        );

        if (userIndex === -1) {
          return res.status(404).json({ error: 'Пользователь не найден' });
        }

        const currentUser = usersData.data[userIndex];

        const updatedUser = {
          ...currentUser,
          email: userUpdateData.email || currentUser.email,
          name: userUpdateData.name || currentUser.name,
          password: userUpdateData.password || currentUser.password,
          age: userUpdateData.age || currentUser.age,
          city: userUpdateData.city || currentUser.city,
          description: userUpdateData.description || currentUser.description,
          avatar: avatar
            ? `${uploadsPath}/${avatar[0].filename}`
            : currentUser.avatar,
          userCard: {
            ...currentUser.userCard,
            name: userUpdateData.name || currentUser.userCard?.name,
            age:
              formatAge(countAge(userUpdateData.age)) ||
              currentUser.userCard?.age,
            description:
              userUpdateData.description || currentUser.userCard?.description,
            avatar: avatar
              ? `${uploadsPath}/${avatar[0].filename}`
              : currentUser.avatar,
            gender: userUpdateData.gender || currentUser.userCard?.gender,
            city: userUpdateData.city || currentUser.userCard?.city
          }
        };
        console.log(userUpdateData.city);
        usersData.data[userIndex] = updatedUser;

        fs.writeFile(
          `${staticPath}/users.json`,
          JSON.stringify(usersData, null, 2),
          'utf-8',
          (err) => {
            if (err) return res.status(500).json(error);

            fs.readFile(
              `${staticPath}/userCards.json`,
              'utf-8',
              (err, fileData) => {
                if (err) return res.status(500).json(error);

                const userCards: { data: TUserCard[] } = JSON.parse(fileData);
                const userCardID = userCards.data.findIndex(
                  (card) => card._id === updatedUser.userCard._id
                );

                userCards.data[userCardID] = updatedUser.userCard;

                fs.writeFile(
                  `${staticPath}/userCards.json`,
                  JSON.stringify(userCards, null, 2),
                  (err) => {
                    if (err) return res.status(500).json(error);

                    return res.status(200).json({
                      success: true,
                      data: updatedUser
                    });
                  }
                );
              }
            );
          }
        );
      } catch (err) {
        return /Error/.test(String(err))
          ? res.status(401).json({
              error: 'Email уже занят'
            })
          : res.status(500).json(error);
      }
    });
  }
);

app.get('/favorites', (req, res) => {
  const { authorization } = req.headers;
  if (authorization === 'null') {
    return res.status(403).json(error);
  }

  fs.readFile(`${staticPath}/users.json`, 'utf-8', (err, fileData) => {
    if (err) return res.status(500).json(error);

    try {
      const allUsers: { data: TUser[] } = JSON.parse(fileData);
      const authorizationUser = allUsers.data.find(
        (user) => user.email === authorization
      );

      return res.status(200).json({
        success: true,
        favorites: [...authorizationUser?.favorites!]
      });
    } catch (err) {
      return res.status(500).json(error);
    }
  });
});

app.put('/favorites/:id', (req, res) => {
  const { authorization } = req.headers;
  const id = req.params.id;

  if (authorization === 'null') {
    return res.status(403).json(error);
  }

  fs.readFile(`${staticPath}/users.json`, 'utf-8', (err, fileData) => {
    if (err) return res.status(500).json(error);

    try {
      const allUsers: { data: TUser[] } = JSON.parse(fileData);
      const authorizationUser = allUsers.data.find(
        (user) => user.email === authorization
      ) as TUser;

      authorizationUser.favorites = [
        ...new Set([...authorizationUser?.favorites, id])
      ];

      fs.writeFile(
        `${staticPath}/users.json`,
        JSON.stringify(allUsers, null, 2),
        (writeError) => {
          if (writeError) return res.status(500).json(error);

          return res.json({
            success: true,
            data: {
              favorites: authorizationUser.favorites
            }
          });
        }
      );
    } catch (err) {
      return res.status(500).json(error);
    }
  });
});

app.delete('/favorites/:id', (req, res) => {
  const { authorization } = req.headers;
  const id = req.params.id;

  if (authorization === 'null') {
    return res.status(403).json(error);
  }

  fs.readFile(`${staticPath}/users.json`, 'utf-8', (err, fileData) => {
    if (err) return res.status(500).json(error);

    try {
      const allUsers: { data: TUser[] } = JSON.parse(fileData);
      const authorizationUser = allUsers.data.find(
        (user) => user.email === authorization
      );
      if (Array.isArray(authorizationUser?.favorites)) {
        authorizationUser.favorites = authorizationUser?.favorites.filter(
          (favorite) => favorite !== id
        );
      }

      fs.writeFile(
        `${staticPath}/users.json`,
        JSON.stringify(allUsers, null, 2),
        (writeError) => {
          if (writeError) return res.status(500).json(error);

          return res.json({
            success: true,
            data: {
              favorites: [...authorizationUser?.favorites!]
            }
          });
        }
      );
    } catch (err) {
      return res.status(500).json(error);
    }
  });
});

app.get('/userCards', (req, res) => {
  fs.readFile(`${staticPath}/userCards.json`, 'utf8', (err, fileData) => {
    if (err) return res.status(500).json(error);

    try {
      const jsonData: { success: boolean; data: TUserCard[] } =
        JSON.parse(fileData);
      return res.json(jsonData);
    } catch (err) {
      return res.status(500).json(error);
    }
  });
});

app.get('/skills', (req, res) => {
  fs.readFile(`${staticPath}/skills.json`, 'utf8', (err, data) => {
    if (err) return res.status(500).json(error);
    const jsonFormat = JSON.parse(data);
    return res.json(jsonFormat);
  });
});

app.get('/exchange-request', (req, res) => {
  const { authorization } = req.headers;

  if (authorization === 'null') {
    return res.status(403).json({
      error: 'Пользователь не авторизован'
    });
  }

  setTimeout(() => {
    res.json({
      success: true
    });
  }, 1500);
});

app.get('/logout', (req, res) => {
  const { authorization } = req.headers;

  if (authorization === 'null') {
    return res.status(403).json(error);
  }

  return res.json({
    success: true
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
