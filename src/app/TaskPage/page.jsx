"use client"

import { ChevronLeftIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function TaskDetails(){
    const router = useRouter()
    const [title, setTitle]= useState("");
    const [description, setDescription]= useState("");

    const searchParams = useSearchParams();
    

    useEffect(()=>{
        const titleP = searchParams.get("titulo");
        const descriptionP = searchParams.get("descricao");

        setTitle(titleP || "Sem titulos");
        setDescription(descriptionP || "Sem descrição")
    },[searchParams]);

    function onBackClik(){
        router.push("/")
    }
    return(
        <div className="h-screen w-screen bg-orange-400 p-6">    {/*h-screen = Altura 100% w-screen= Largura 100% */}
        <div className="w-[500px] mx-auto space-y-4">
            <div className="flex justify-center relative mb-5">
                <button className="absolute left-0 top-0 bottom-0 text-white" 
                onClick={onBackClik}
                >
                    <ChevronLeftIcon/>
                </button>

                <h1>Detalhes da Tarefa</h1>
            </div>

            <div className="bg-orange-400 p-4 rounded-md">
                <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                <p className="text-slate-600">{description}</p>
            </div>
        </div>
       </div>
    );
}

function TaskPage(){

    
    

    return(
        <Suspense fallback={<div>Carregando...</div>}>
            <TaskDetails/>  
        </Suspense>
);
}
export default TaskPage;