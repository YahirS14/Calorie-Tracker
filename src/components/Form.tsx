import { categories } from "../data/categories";

function Form() {
  return (
    <form className='space-y-5 bg-white shadow p-10 rounded-lg'>
      <div className='grid grid-cols-1 gap-3'>
        <label htmlFor='category' className='font-bold'>
          Categoría:
        </label>
        <select
          className='border border-slate-300 p-2 rounded-lg w-full bg-white'
          id='category'
        >
          {categories.map((caregoty) => (
            <option key={caregoty.id} value={caregoty.id}>
              {caregoty.name}
            </option>
          ))}
        </select>
      </div>

      <div className='grid grid-cols-1 gap-3'>
        <label htmlFor='activity' className='font-bold'>
          Actividad:
        </label>

        <input
          id='activity'
          className='border border-slate-300 p-2 rounded-lg'
          type='text'
          placeholder='Ej. Comida, Jugo de Naranja, Ejercicio, Pesas'
        />
      </div>

      <div className='grid grid-cols-1 gap-3'>
        <label htmlFor='calories' className='font-bold'>
          Calorias:
        </label>

        <input
          id='calories'
          className='border border-slate-300 p-2 rounded-lg'
          type='number'
          placeholder='Calorias ej. 300'
        />
      </div>

      <input
        type='submit'
        className='bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer'
        value='Guardar'
      />
    </form>
  );
}

export default Form;
