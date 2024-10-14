
"use client" //coloca somente em paginas de usuário
import Task from "@/componentes/Task";
import AddTask from "@/componentes/AddTask";  //importar componentes
import { useEffect, useState} from "react";
import { v4 } from "uuid";  //importa uuid que gera chaves, codigos de identificação aleatórios
import Image from "next/image";
import dancacadeira from '@/assets/dancacadeira.png'






import { ChevronRight } from "lucide-react";


function Home(){  //[] = Array vetor / {} = Objeto. Para se criar array vetor com msto de string e numeros, usa-se os objetos 

  const [tarefas, setTasks] = useState([]);

  useEffect(()=>{
    //Verifica se está do lado do cliente
    if(typeof window !== "undefinied")   {//Se janela não for undefines}
      const storedTasks = JSON.parse(localStorage.getItem("tarefas"))
      setTasks(storedTasks);
    }

  },[]);

  //Salvar tarefas
  useEffect(()=>{
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
  },[tarefas]);

  

  function clicarTarefa(taskId){
    const newTasks = tarefas.map((task)=>{
      if(task.id === taskId){ 
        //if preciso atualizar essa tarefa
        return {...task, isCompleted:!task.isCompleted} } 
        //Não preciso atualizar essa  tarefa
        return task //else
    });
    setTasks (newTasks);
  }

  function deletarTarefaPorClique(taskId) {
    const newTasks = tarefas.filter(task => task.id !== taskId)
    //function task(){task.id}
    setTasks(newTasks)
  }

  function adicionarTarefa(titulo, descricao){
    const newTask = {
      id: v4(),  //gera id aleatório. Se quiser fazer padrão numerico = tarefas.length +1
      title: titulo,
      description: descricao,
      isCompleted: false,
    }
    setTasks([...tarefas, newTask]);
  }

  return(
    <>
    <div className="w-screen h-screen bg-orange-200 flex justify-center p-6">   {/*w-screen(Altura) h-screen(largura) = padrão para ocupar toda a tela  */}    
     <div className="w-[500px] space-y-4"> {/*w-[]para detalhar tamanho de altura separadas, colocar entre colchetes */}    
     <h1 className="text-4xl text-orange-400 font-bold text-center " >Feira do Dia das Crianças</h1>
     <Task tasks={tarefas} onTaskClik={clicarTarefa} onDeleteTaskClick={deletarTarefaPorClique}/>
     <AddTask onAddTaskSubmit={adicionarTarefa}/>
     <div>
    <Image
      src={dancacadeira}
      width={500}
      height={500}
      alt=""
      />
      </div>
        
     
     </div>
    </div>    
</>
  )
}
export default Home;