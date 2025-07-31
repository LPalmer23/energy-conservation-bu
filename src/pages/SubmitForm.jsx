import React, { useState } from 'react';
import './SubmitForm.css';

export default function SubmitForm() {
  const [formData, setFormData] = useState({
    name: '',
    building: '',
    actions: [],
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        actions: checked
          ? [...prev.actions, value]
          : prev.actions.filter((action) => action !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // Send to Firebase or server here.
  };

  return (
    <div className="submit-page">
      <form className="full-form" onSubmit={handleSubmit}>
        <h2>Energy Reduction Report</h2>

        <div className="form-group">
          <label htmlFor="building">Building Name:</label>
          <input
            type="text"
            id="building"
            name="building"
            value={formData.building}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Actions Taken:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="actions"
                value="Turned off lights"
                onChange={handleChange}
              />
              Turned off lights
            </label>
            <label>
              <input
                type="checkbox"
                name="actions"
                value="Dimmed lighting"
                onChange={handleChange}
              />
              Dimmed lighting
            </label>
            <label>
              <input
                type="checkbox"
                name="actions"
                value="Reduced HVAC usage"
                onChange={handleChange}
              />
              Reduced HVAC usage
            </label>
            <label>
              <input
                type="checkbox"
                name="actions"
                value="Delayed equipment use"
                onChange={handleChange}
              />
              Delayed equipment use
            </label>
            <label>
              <input
                type="checkbox"
                name="actions"
                value="Other"
                onChange={handleChange}
              />
              Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="notes">Additional Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Optional: Describe specific steps, locations, or timing."
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
