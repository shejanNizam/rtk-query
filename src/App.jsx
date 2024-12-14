import { Provider } from "react-redux";
import { store } from "./app/store";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl mb-4 text-red-600">CRUD App</h1>
        <PostForm />
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
