import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="max-w-[400px] w-full h-[800px] bg-red-200 ">
            <Outlet />
        </div>
    )
}

export default MainLayout;