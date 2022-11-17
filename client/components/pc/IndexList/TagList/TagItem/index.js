import style from '../../../../../css/pc/pc.module.scss'
import {useRouter} from "next/router";
import Link from "next/link";

const TagItem = ({ tag }) => {
  const router = useRouter();

  const tagActive = router.query.tag === tag.name ? style.active : '';

  return (
    <div className={`${style.tagItemWrapper} ${tagActive}`}>
      <Link href={`/tag/${tag.name}`}>
        {tag.name}
      </Link>
      { router.query.tag === tag.name
          ? <div className={style.tagItemUnderline}></div>
          : null
      }
    </div>
  );
};

export default TagItem;
