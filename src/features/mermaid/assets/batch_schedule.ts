'use client'

const printTask = (taskId: string) => {
  alert('taskId: ' + taskId)
}
const printArguments = (arg1: string, arg2: string, arg3: string) => {
  alert(
    'printArguments called with arguments: ' + arg1 + ', ' + arg2 + ', ' + arg3
  )
}

const setEventListenersToWindow = () => {
  window.printTask = printTask
  window.printArguments = printArguments
}

export default setEventListenersToWindow
