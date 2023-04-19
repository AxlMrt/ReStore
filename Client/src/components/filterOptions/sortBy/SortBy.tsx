import './sortBy.css';

interface Props {
  options: any[];
  onChange: (event: any) => void;
  selected: string;
}

export default function SortBy({ options, onChange, selected }: Props) {
  
  return (
      <select className='shop_options' onChange={onChange} value={selected}>
        {
          options.map((option) => {
            return <option value={option.value} key={option.value}>{option.name}</option>
          })
        }
      </select>
  )
}
