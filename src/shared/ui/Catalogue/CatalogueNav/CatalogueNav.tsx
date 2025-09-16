import React from 'react';
import { FC } from 'react';
import { CatalogueLinkUI } from '@shared/ui/Catalogue';
import { TSkill } from '@api';
import styles from '../common.module.css';

import briefcaseIcon from '../../../assets/icons/briefcase.svg';
import globalIcon from '../../../assets/icons/global.svg';
import homeIcon from '../../../assets/icons/home.svg';
import paletteIcon from '../../../assets/icons/palette.svg';
import bookIcon from '../../../assets/icons/book.svg';
import lifestyleIcon from '../../../assets/icons/lifestyle.svg';

export type TCatalogueProps = {
  data: TSkill[];
};

export const CatalogueNavUI: FC<TCatalogueProps> = ({ data }) => {
  const icons: { [key: string]: string } = {
    '1': briefcaseIcon,
    '2': globalIcon,
    '3': homeIcon,
    '4': paletteIcon,
    '5': bookIcon,
    '6': lifestyleIcon
  };

  const bgColors: { [key: string]: string } = {
    '1': '--tag-business',
    '2': '--tag-languages',
    '3': '--tag-home',
    '4': '--tag-creativity',
    '5': '--tag-education',
    '6': '--tag-health'
  };

  return (
    <nav className={styles.megamenu}>
      {data.map((skill) => {
        if (skill.parent_id === '0') {
          return (
            <section key={skill._id} className={styles.megamenu_section}>
              <div className={styles.megamenu_subtitle}>
                <div
                  className={styles.megamenu_icon}
                  style={{ backgroundColor: `var(${bgColors[skill._id]})` }}
                >
                  <img src={icons[skill._id]} alt={skill.name} />
                </div>
                <h2>{skill.name}</h2>
              </div>
              <CatalogueLinkUI data={data} skill_id={skill._id} />
            </section>
          );
        }
      })}
    </nav>
  );
};
