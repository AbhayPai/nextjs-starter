import Link from "next/link";
import getPostsData from "../../data/getPostsData";

export default async function Posts(): Promise<any> {
  const postsData = await getPostsData();

  return (
    <>
      {postsData.map((post) => (
          <div key={post.id} className='col-sm-4 my-2'>
            <div className='card h-100'>
              <div className='card-body'>
                <h3 className='card-title'>{post.title}</h3>
                <p className='card-text'>{post.body}</p>
                <Link href={`/blog/${post.id}`} passHref className='btn btn-primary'>
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}