import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { CatalogueNavUI } from '@shared/ui/Catalogue/CatalogueNav';
import { TCatalogueProps } from './CatalogueNav/CatalogueNav';

const meta: Meta = {
  title: 'Catalogue',
  component: CatalogueNavUI,
  tags: ['autodocs']
} satisfies Meta<typeof CatalogueNavUI>;

export default meta;
type Story = StoryObj<typeof meta>;

const CatalogueTemplate = (args: TCatalogueProps) => (
  <CatalogueNavUI {...args} />
);

export const Catalogue: Story = {
  render: CatalogueTemplate,
  args: {
    data: [
      {
        _id: '1',
        name: 'Бизнес и карьера',
        parent_id: '0'
      },
      {
        _id: '2',
        name: 'Иностранные языки',
        parent_id: '0'
      },
      {
        _id: '3',
        name: 'Дом и уют',
        parent_id: '0'
      },
      {
        _id: '4',
        name: 'Творчество и искусство',
        parent_id: '0'
      },
      {
        _id: '5',
        name: 'Образование и развитие',
        parent_id: '0'
      },
      {
        _id: '6',
        name: 'Здоровье и лайфстайл',
        parent_id: '0'
      },
      {
        _id: '7',
        name: 'Управление командой',
        parent_id: '1'
      },
      {
        _id: '8',
        name: 'Маркетинг и реклама',
        parent_id: '1'
      },
      {
        _id: '9',
        name: 'Продажи и переговоры',
        parent_id: '1'
      },
      {
        _id: '10',
        name: 'Личный бренд',
        parent_id: '1'
      },
      {
        _id: '11',
        name: 'Резюме и собеседование',
        parent_id: '1'
      },
      {
        _id: '12',
        name: 'Тайм-менеджмент',
        parent_id: '1'
      },
      {
        _id: '13',
        name: 'Проектное управление',
        parent_id: '1'
      },
      {
        _id: '14',
        name: 'Предпринимательство',
        parent_id: '1'
      },
      {
        _id: '15',
        name: 'Английский',
        parent_id: '2'
      },
      {
        _id: '16',
        name: 'Французский',
        parent_id: '2'
      },
      {
        _id: '17',
        name: 'Испанский',
        parent_id: '2'
      },
      {
        _id: '18',
        name: 'Немецкий',
        parent_id: '2'
      },
      {
        _id: '19',
        name: 'Китайский',
        parent_id: '2'
      },
      {
        _id: '20',
        name: 'Японский',
        parent_id: '2'
      },
      {
        _id: '21',
        name: 'Подготовка к экзаменам (IELTS, TOEFL)',
        parent_id: '2'
      },
      {
        _id: '22',
        name: 'Уборка и организация',
        parent_id: '3'
      },
      {
        _id: '23',
        name: 'Домашние финансы',
        parent_id: '3'
      },
      {
        _id: '24',
        name: 'Приготовление еды',
        parent_id: '3'
      },
      {
        _id: '25',
        name: 'Домашние растения',
        parent_id: '3'
      },
      {
        _id: '26',
        name: 'Ремонт',
        parent_id: '3'
      },
      {
        _id: '27',
        name: 'Хранение вещей',
        parent_id: '3'
      },
      {
        _id: '28',
        name: 'Рисование и иллюстрация',
        parent_id: '4'
      },
      {
        _id: '29',
        name: 'Фотография',
        parent_id: '4'
      },
      {
        _id: '30',
        name: 'Видеомонтаж',
        parent_id: '4'
      },
      {
        _id: '31',
        name: 'Музыка и звук',
        parent_id: '4'
      },
      {
        _id: '32',
        name: 'Актёрское мастерство',
        parent_id: '4'
      },
      {
        _id: '33',
        name: 'Креативное письмо',
        parent_id: '4'
      },
      {
        _id: '34',
        name: 'Арт-терапия',
        parent_id: '4'
      },
      {
        _id: '35',
        name: 'Декор и DIY',
        parent_id: '4'
      },
      {
        _id: '36',
        name: 'Личностное развитие',
        parent_id: '5'
      },
      {
        _id: '37',
        name: 'Навыки обучения',
        parent_id: '5'
      },
      {
        _id: '38',
        name: 'Когнитивные техники',
        parent_id: '5'
      },
      {
        _id: '39',
        name: 'Скорочтение',
        parent_id: '5'
      },
      {
        _id: '40',
        name: 'Навыки преподавания',
        parent_id: '5'
      },
      {
        _id: '41',
        name: 'Коучинг',
        parent_id: '5'
      },
      {
        _id: '42',
        name: 'Йога и медитация',
        parent_id: '6'
      },
      {
        _id: '43',
        name: 'Питание и ЗОЖ',
        parent_id: '6'
      },
      {
        _id: '44',
        name: 'Ментальное здоровье',
        parent_id: '6'
      },
      {
        _id: '45',
        name: 'Осознанность',
        parent_id: '6'
      },
      {
        _id: '46',
        name: 'Физические тренировки',
        parent_id: '6'
      },
      {
        _id: '47',
        name: 'Сон и восстановление',
        parent_id: '6'
      },
      {
        _id: '48',
        name: 'Баланс жизни и работы',
        parent_id: '6'
      }
    ]
  }
};
