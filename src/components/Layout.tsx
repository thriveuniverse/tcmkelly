export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="app-layout">
            {/* Global background elements can go here */}
            <div className="bg-blobs">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>
            {children}
        </div>
    );
};
