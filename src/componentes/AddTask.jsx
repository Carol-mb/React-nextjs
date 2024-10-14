import { useState } from "react"

function AddTask(props) {
    
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");

    return (
        <>
            <div className="space-y-4 p-6 bg-orange-400 rounded-md shadow flex flex-col">
                <input type="text"
                placeholder="Digite seu nome"
                className="border bg-white bg-white px-4 py-2 rounded-md"
                value={title}
                onChange={(event)=>setTitle(event.target.value)}  //onChange = atributo que aplica a mudança, o evento. Sequencia input, value, event, onChange e por ultimo seTitle
                />
                <input type="text"
                placeholder="Digite o valor até 10 reais"
                className=" border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                value={description}
                onChange={(event)=>setDescription(event.target.value)} 
                />
                <button 
                onClick={()=>{
                    if(!title.trim() || !description.trim()){ //trim deixa espaço vazio. 
                        return alert("Preencha o titulo e a descrição da Tarefa")
                    }
                    props.onAddTaskSubmit(title,description);
                    setTitle(""); //limpar campo do input
                    setDescription("");
                }}
                className="bg-slate-400 text-white px-4 py-2 rounded-md font-medium">Adicionar
                </button>
            </div>
        </>
    )
}
export default AddTask