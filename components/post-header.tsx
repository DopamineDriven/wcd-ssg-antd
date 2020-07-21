import Avatar from "./avatar";
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import Author from '../types/author';


type Props = {
    title: string;
    coverImage: string;
    date: string;
    author: Author;
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="post-header-avatar md:block md:mb-5">
                <Avatar name={author.name} picture={author.picture} />
            </div>
            <div className="-mx-125 mb-5 md:mb-6 sm:mx-0">
                <CoverImage title={title} src={coverImage} />
            </div>
            <div className="mx-auto max-width-42">
                <div className="block md:hidden mb-4">

                </div>

            </div>

        </>
    )
}