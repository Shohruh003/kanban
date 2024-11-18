import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const NotFoundPage: FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, []);

    return null;
}

export default NotFoundPage;