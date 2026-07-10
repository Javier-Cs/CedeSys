import { use } from "react";
import { useState, useEffect} from "react";

export default function HeaderInfoH(){
    const[dateTime, setDateTime] = useState(new Date());
    
    useEffect(() =>{
        const intervalo = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(intervalo);
    }, []);

    return(
        <div className="w-full text-center py-2 text-sm text-gray-400">
            {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
        </div>
    );
}

