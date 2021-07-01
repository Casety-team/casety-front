import Gallery from "./gallery";

const Blog = () => {
  return (
    <div className="min-h-screen flex justify-center py-12 px-4 sm:px-4 md:px-6 lg:px-8">
      <div className="px-4 py-5 bg-white sm:p-3 md:p-6 lg:p-8">
        <Gallery />
      </div>
    </div>
  );
};

export default Blog;
