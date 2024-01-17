import { useNavigate } from "react-router-dom";
import { ScreenFormTable } from "../components/ScreenFormLog";
import { Button } from "@mui/material";

export const ScreenForm =() => {
    const navigate = useNavigate();

    function addRequest(){
        navigate("/")
    }

    return(
        <>
            <Button variant="outlined" onClick={e => addRequest()}>New Screen Form</Button>
            <ScreenFormTable />
        </>
    )
}
