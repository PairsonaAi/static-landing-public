import "./AdminRoute.css";
import { useEffect, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Backend from "src/middleware/Backend";

interface AdminRouteProps {
  children: ReactNode;
}

export const AdminRoute = ({children}: AdminRouteProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        Backend.checkAdmin()
            .then((response) => {
                if (response.status === 200) {
                    setIsLoading(false);
                } else {
                    navigate('/admin/login');
                }
            })
            .catch((_error) => {
                navigate('/admin/login');
            });
    }, [navigate]);

    return (
        <>
        { isLoading ? <div>Checking admin status...</div> : children }
        </>
    );
}