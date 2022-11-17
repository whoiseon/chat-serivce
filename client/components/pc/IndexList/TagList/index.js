import React from 'react';
import style from '../../../../css/pc/pc.module.scss'
import TagItem from "./TagItem";
import Link from "next/link";
import {useRouter} from "next/router";

const dummyTagList = [
  {name: '자유', code: '01'},
  {name: '게임', code: '02'},
  {name: '친목', code: '03'},
  {name: '공부', code: '04'},
  {name: '만화', code: '05'},
  {name: '일상', code: '06'},
]

const TagList = () => {
  const router = useRouter();

  const homeActive = router.query.tag === undefined ? style.active : '';

  return (
    <div className={style.tagListWrapper}>
      <div className={`${style.tagItemWrapper} ${homeActive}`}>
        <Link href="/">
          전체
        </Link>
        { router.query.tag === undefined
          ? <div className={style.tagItemUnderline} />
          : null
        }
      </div>
      {
        dummyTagList.map((tag) => {
          return (
            <TagItem
              key={tag.name}
              tag={tag}
            />
          )
        })
      }
    </div>
  );
};

export default TagList;
