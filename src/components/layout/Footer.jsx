const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm">
            © 2025 Pinspire. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-red-500 text-sm">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-red-500 text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-red-500 text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 