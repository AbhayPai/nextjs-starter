import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='row'>
      <div className='col-12 text-center py-3'>
        <h1>Oops! 404 Not Found</h1>
        <p>Sorry, an error has occured, Requested page not found!</p>
        <p>Go to <Link href="/">Home</Link> page ?</p>
      </div>
    </div>
  );
}