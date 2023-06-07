async function getPostsData(id: number = 0): Promise<any> {
  const postApiEndpoint: string = id !== 0
    ? `https://jsonplaceholder.typicode.com/posts/${id}`
    : 'https://jsonplaceholder.typicode.com/posts';

  const response = await fetch(postApiEndpoint, {
    next: {
      revalidate: 60,
    },
  });

  const postsData = await response.json();
  return postsData;
}

export default getPostsData;
