const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
