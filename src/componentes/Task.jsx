
import { TrashIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";


function Task(props) {

  const router = useRouter();

  function onSeeDetailsClick(task){
    const query = new URLSearchParams();
    query.set("titulo", task.title);
    query.set("descricao", task.description);

    router.push(`/TaskPage?${query.toString()}`);
  }
  
  return (
    <>
      <ul className="space-y-4 p-6 bg-orange-400 rounded-md shadow">
        {props.tasks.map((task) => (  //map = mapeia e imprime um a um. Mesma função do For(loop) 
          <li key={task.id} className="flex gap-2">      
            <button onClick={() => props.onTaskClik(task.id)}
              className="bg-orange-400 text-left w-full text-white p-2 rounded-md"
            >{task.title} - 
              {task.isCompleted ? "Complete" : "Incomplete"}    {/* ? = if  : = Else / sempre inicia como verdadeiro  */}              
            </button>

            
            <button className="bg-orange-400 p-2 rounded-md text-white"
            onClick={()=>onSeeDetailsClick(task)}            >
              <ChevronRight />
              </button>           

            <button onClick={()=>props.onDeleteTaskClick(task.id)} className="bg-orange-400 p-2 rounded-md text-white">
              <TrashIcon />
              </button>
          </li>
        ))}
      </ul>    
      </>
    );
}
export default Task;  //exportar componente