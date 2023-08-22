import { Tasks } from "@/components/Tasks"
import { prisma } from "@/libs/prisma"

const loadTasks = async () => await prisma.taks.findMany()

export const revalidate = 60

const HomePage = async () => {
  const tasks = await loadTasks()

  return (
    <>
      <div className="container mx-auto pt-10 space-y-5 md:space-y-0 px-5 md:px-0 md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {
          tasks.map(task => (
            <Tasks key={task.id} task={task} />
          ))
        }

      </div>
    </>
  )
}

export default HomePage