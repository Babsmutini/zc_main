import React, { useState } from 'react'
import styles from '../styles/NotificationPreference.module.css'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const TextInput = ({ type = 'text', label }) => {
  const [value, setValue] = useState('')

  function handleChange(e) {
    setValue(e.target.value)
  }
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        className={styles.textInput}
        value={value}
        onChange={handleChange}
      />
      <label className={value && 'filled'}>{label}</label>
    </div>
  )
}

const NotificationPreference = () => {
  const [state, setState] = useState({
    name: 'React',
    value: 'duration'
  })

  const handleChange = event => {
    setState({ value: event.target.value })
  }

  const onValueChange = event => {
    setState({
      selectedOption: event.target.value
    })
  }

  return (
    <div className={styles.body}>
      <div className={styles.notifySidebar}>
        <div className={styles.one}>
          <img src="./bell.svg" alt="one" />
          <p>Notifications</p>
        </div>
        <div className={styles.one}>
          <img src="./active1.svg" alt="one" />
          <p>Sidebar</p>
        </div>
        <div className={styles.one}>
          <img src="./active2.svg" alt="one" />
          <p>Themes</p>
        </div>
        <div className={styles.one}>
          <img src="./active3.svg" alt="one" />
          <p>Messages & Media</p>
        </div>
        <div className={styles.one}>
          <img src="./active4.svg" alt="one" />
          <p>Languages & Region</p>
        </div>
        <div className={styles.one}>
          <img src="./active5.svg" alt="one" />
          <p>Accessibility</p>
        </div>
        <div className={styles.one}>
          <img src="./active6.svg" alt="one" />
          <p>Mark as read</p>
        </div>
        <div className={styles.one}>
          <img src="./active7.svg" alt="one" />
          <p>Audio & Video</p>
        </div>
        <div className={styles.one}>
          <img src="./active8.svg" alt="one" />
          <p>Advanced</p>
        </div>
      </div>

      {/*  THE SECTION OF THE CONTENT */}
      <div className={styles.notifyContent}>
        <div className={styles.itemTitle1}>
          <h4 class={styles.titleLarge}>Notify me about </h4>{' '}
          <span>
            <AiOutlineQuestionCircle />
            Learn about notifications
          </span>
        </div>
        <form>
          <div className={styles.radio}>
            <input
              type="radio"
              value="all-messages"
              checked={state.selectedOption === 'all-messages'}
              onChange={onValueChange}
            />
            <label htmlFor="all-messages">All messages</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              value="direct-messages"
              checked={state.selectedOption === 'direct-messages'}
              onChange={onValueChange}
            />
            <label htmlFor="direct-messages">Direct messages</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              value="none"
              checked={state.selectedOption === 'none'}
              onChange={onValueChange}
            />
            <label htmlFor="none">None</label>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" value="for-mobile" />

            <label htmlFor="for-mobile">Use different setting for mobile</label>
          </div>
          {/* <div className={styles.line}></div> */}
          <hr />
          <div className={styles.checkbox}>
            <input type="checkbox" value="for-mobile" />

            <label htmlFor="for-mobile">Notify me when a meeting is set</label>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" value="for-mobile" />
            <label htmlFor="for-mobile">Notify me of replies to thread</label>
          </div>
        </form>
        <div className={styles.itemTitle2}>
          <h4 class={styles.titleLarge}>Keywords</h4>{' '}
          <span>
            You will be notified anything, someone uses these keywords in a
            thread
          </span>
          <textarea className={styles.textarea}></textarea>
        </div>
        {/* <div className={styles.line}></div> */}
        <hr />
        <div className={styles.itemTitle2}>
          <h4 class={styles.titleLarge}>Schedule Notifications</h4>{' '}
          <span>
            You'll only receive notifications in the hours that you choose.
            Outside of those times, notifications will be paused.
          </span>
          <span className={styles.spanSmall}>Learn more</span>
        </div>
        <div className="schdeule">
          <ul className={styles.list}>
            <li className={styles.listChild}>
              <div className="select">
                <select
                  name="duration"
                  className={styles.selectButton}
                  id=""
                  value={state.value}
                  onChange={handleChange}
                >
                  <option value="duration">Duration</option>
                </select>
              </div>
            </li>
            <li className={styles.listChild}>
              <TextInput label="From" />
            </li>
            <li className={styles.listChild}>
              <TextInput label="to" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NotificationPreference
