import { Suspense } from "react";

import LoadingPage from "@/lang/loading";
import Post from "@/components/text/dynamic/Post";

export default function BlogPage({
  params: { id }
}: {
  params: { id: number }
}): JSX.Element {
  return(
    <div className='row'>
      <div className='col-12'>
        <Suspense fallback={< LoadingPage />}>
          <Post id={id} />
        </Suspense>
      </div>
    </div>
  );
}
