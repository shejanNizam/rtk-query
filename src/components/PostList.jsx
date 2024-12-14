import { useGetPostsQuery, useDeletePostMutation } from "../services/api";

const PostList = () => {
  const { data: posts, isLoading } = useGetPostsQuery();
  const [deletePost] = useDeletePostMutation();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      {posts?.map((post) => (
        <div key={post.id} className="card p-4 shadow-lg space-y-2">
          <h3 className="text-xl">{post.title}</h3>
          <p>{post.body}</p>
          <div className="flex justify-between">
            <button
              onClick={() => deletePost(post.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
            <button className="btn btn-secondary">Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
