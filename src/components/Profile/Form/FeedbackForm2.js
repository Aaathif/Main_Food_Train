import React, { useEffect, useState } from 'react'
import {options , categories} from './Data'
import Form from './Form.module.css'
import axios from 'axios'

function FeedbackForm({ closeModal, feedback }) {
    const [feedbackType, setFeedbackType] = useState('N/A')
    const [category, setCategory] = useState('N/A')
    const [description, setDescription] = useState('')

    useEffect(() => {
      if (feedback) {
        setFeedbackType(feedback.feedbackType);
        setCategory(feedback.category);
        setDescription(feedback.description);
      }
    }, [feedback]);

    const handleType = (event) => {
        setFeedbackType(event.target.value)
    }

    const handleCategory = (event) => {
        setCategory(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

   const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = { feedbackType, category, description };
      // console.log("Form data:", formData);
      // code to submit form data

      if (feedback) {
        try {
          const response = await axios.put(`http://localhost:8000/api/feedback/${feedback._id}`, formData)          
          console.log('Updated feedback:', response.data)
          closeModal()
        } catch (error) {
          console.log('Error:', error.message)
        }
      } else {
      try {
        const response = await axios.post('http://localhost:8000/api/feedback/', formData);
        console.log('Response:', response.data);
        alert("Feedback Submitted")
        closeModal()
      } catch (error) {
        console.log('Error:', error.message);
      }

    }
  }

  return (
    <div className={Form.container}> 
      <h1 className={Form.header}>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label className={Form.label}>Select Type: </label>
        <select value={feedbackType} onChange={handleType} className={Form.select}>
            {options.map((option) => (
                <option key={option.id} value={option.label}>
                    {option.label}
                </option>
            ))}
        </select>

        <label className={Form.label}>Select Category: </label>
        <select value={category} onChange={handleCategory} className={Form.select}>
            {categories.map((category) => (
                <option key={category.id} value={category.label}>
                    {category.label}
                </option>
            ))}
        </select>


        <label className={Form.label}>Description </label>
        <textarea 
            value={description} onChange={handleDescription}
            rows={5} cols={50} className={Form.select}
            placeholder='Enter Your Message'
        />


        <button type='submit' className={Form.submit}>
          {feedback ? 'Update' : 'Submit'}
        </button>
      </form>
      
    </div>
  )
}

export default FeedbackForm

