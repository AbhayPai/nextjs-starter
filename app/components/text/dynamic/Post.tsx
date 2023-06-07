import Link from "next/link";
import getPostsData from "../../data/getPostsData";

export default async function Post({id}: {id: number}): Promise<any> {
  const postData = await getPostsData(id);

  return (
    <div>
      <h1>{postData.title}</h1>
      <div className='col-12 text-center py-3'>
        <Link href={`/blog`} className='btn btn-primary'>Back to Blogs ?</Link>
      </div>
    </div>
  );
}