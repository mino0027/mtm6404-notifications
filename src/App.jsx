import { useState } from 'react'
import './App.css'
import notifications from './notifications.js'

function App() {
  const [notificationData, setNotificationData] = useState(notifications)
  
  // delete a individual noti
const handleDelete = (id) => {
  const newNotificationData = notificationData.filter((notification) => notification.id !== id)
    setNotificationData(newNotificationData)
  } 
  
  // delete all noti's
  const handleDeleteAll = () => {
    setNotificationData([])
  }
  
  
  const NotificationList = ({children}) => {
    return (
      <div>
        {children}
      </div>
    )
  }
  
  const Notification = ({id, name, message, handleDelete}) => {
    return (
      <div>
        <h1>{name}</h1>
        <p>{message}</p>
        <button onClick={()=>{handleDelete(id)}}>Delete</button>
      </div>
      )
  }
  
  return (
    <div>
      <NotificationList>
        <span>({notificationData.length})</span>
        {notificationData.map((notification) => (
          <Notification key={notification.id} name={notification.name} message={notification.message} handleDelete={()=>{handleDelete(notification.id)}}/>
        ))}
        {notificationData.length > 0 && <button onClick={handleDeleteAll}>Delete All</button>}
      </NotificationList>
    </div>
  )
}

export default App