import { Navbar } from "./navbar";

const DocumentsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
    </div>
  )
}

export default DocumentsPage;