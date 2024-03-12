
import React, { useState } from "react";
import { SideBar, Header, Overlay, Footer } from "@/components";
import NewSidebar from "@/components/NewSidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    // <main className="w-full grid lg:grid-cols-5 grid-cols-1 bg-white h-screen">
    //   <Overlay open={openMenu} setOpen={setOpenMenu} />
    //   <SideBar open={openMenu} setOpen={setOpenMenu} />
    //   <section className="lg:col-start-2 lg:col-end-6 flex flex-col xl:gap-[42px] lg:gap-8 gap-5 w-full xl:py-10 lg:py-[30px] py-[15px] xl:px-[50px] lg:px-[37px] md:px-5 px-3 bg-[#f7f6fb] h-full overflow-y-scroll">
    //     <Header setOpen={setOpenMenu} />
    //     <div className="flex-grow">{children}</div>
    //     <Footer />
    //   </section>
    // </main>

    <main className="flex">
      {/* <SideBar open={openMenu} setOpen={setOpenMenu} /> */}
      {/* <Overlay open={openMenu} setOpen={setOpenMenu} /> */}
      {/* <NewSidebar open={openMenu} setOpen={setOpenMenu} /> */}
      <div className="flex flex-grow flex-col xl:gap-[42px] lg:gap-8 gap-5 w-full xl:py-10 lg:py-[30px] py-[15px] xl:px-[50px] lg:px-[37px] md:px-5 px-3 bg-[#f7f6fb] h-screen overflow-y-scroll">
        {/* <Header setOpen={setOpenMenu} /> */}
        <div className="flex-grow">{children}</div>
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default DashboardLayout;
