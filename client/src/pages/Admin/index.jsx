import React from 'react';
import CarCreateForm from '../CarCreateForm';
import CarList from '../CarList';
import CarUpdateForm from '../CarUpdateForm';
import CarView from '../CarView';

export default function Admin() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <CarCreateForm />
      <CarList />
      <CarView />
      <CarUpdateForm />
    </div>
  );
}
