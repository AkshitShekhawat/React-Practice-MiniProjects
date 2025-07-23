import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const handleLogOut = () => {
        navigate("/ ")
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h2
                className="text-3xl font-bold text-blue-600">
                    Welcome!TODashboard</h2>


                <button
               className="text-white-900 mt-4 text-lg bg-gray-500 p-2 rounded-lg"
               onClick={handleLogOut}
                >LogOut.</button>
        </div>
    );
}

export default Dashboard;