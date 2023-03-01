/**
 * Files generated using template generator
 */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { MiniatureAardwolfProps } from './config';
import styles from './styles.module.css';

export default function MiniatureAardwolf({title, medias}:MiniatureAardwolfProps) {
    return <div id='projects' className="uk-width-1-1">
    <div className="uk-section uk-dark" style={{ marginBottom: '-20px' }}>
      <div className="uk-container">
        <div className="uk-flex uk-flex-between uk-margin-medium-bottom">
          <div className="uk-h1 uk-text-bolder uk-margin-small-bottom color-midnight-blue">
            {title}
          </div>
          <div className={styles.view_all} hidden={true}>
            <Link className="uk-button uk-button-link uk-padding-small uk-margin-small-left uk-margin-small-right uk-text-bolder" href='projects'>
              VIEW ALL
            </Link>
          </div>
        </div>

        <div className="uk-child-width-1-2@m uk-text-left uk-grid uk-grid-small uk-grid-match" data-uk-grid>
          {medias.map((item, index) =>
            <div uk-lightbox="animation: scale;" key={index} >
              <a className='uk-h4 uk-text-bolder color-midnight-blue ' href={item.url} style={{ textDecoration: 'none' }}>
                <Image src={item.thumbnail} className='uk-margin-small-bottom uk-width-1-1' width={0} height={0} alt={item.text} style={{ borderRadius: '12px' }}/>
                {item.text}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
}
