import React, { useState } from 'react';
import { ConfirmModal } from './ConfirmModal';
import type { Meta, StoryObj } from '@storybook/react';
import { TRegisterData } from '../../../../server/types';

const meta: Meta<typeof ConfirmModal> = {
  title: 'Modals/ConfirmModal',
  component: ConfirmModal,
  tags: ['autodocs']
};

export default meta;

const mockData: TRegisterData = {
  email: 'test@example.com',
  password: '123456',
  name: 'Иван',
  age: '2000-01-01',
  gender: 'мужской',
  city: 'Москва',
  skillId: '123',
  skillWants: ['Гитара', 'Фортепиано'],
  skillName: 'Игра на барабанах',
  skillCanTeachCategory: 'Творчество и искусство',
  skillCanTeachSubCategory: 'Музыка и звук',
  description:
    'Привет! Я играю на барабанах уже больше 10 лет — от репетиций в гараже до выступлений на сцене с живыми группами. Научу основам техники, играть любимые ритмы и звучать уверенно даже без партитуры.',
  avatar: '',
  photos: [
    'https://avatars.mds.yandex.net/i?id=ecc49aafa99eb920ec893ee03da60d7a5479de26-3931230-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=737bea391138759d3148ced6c01ce07ed52090f0-10813564-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=651b962eb76ab735ae5f96faf5f879309d324067-5704191-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=7a2446fc840991b3d8e634b2470585547672c70f-5314793-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=badce7d770017c6b598b1112631124b0c55d7a3a-5341210-images-thumbs&n=13'
  ]
};

export const Default: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
      alert('Закрытие модального окна');
      setOpen(false);
    };

    const handleSubmit = () => {
      alert('Сабмит!');
      setOpen(false);
    };

    return (
      <>
        {open && (
          <ConfirmModal
            onClose={handleClose}
            submit={handleSubmit}
            data={mockData}
          />
        )}
      </>
    );
  }
};
