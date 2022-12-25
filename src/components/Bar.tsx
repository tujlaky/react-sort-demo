import './Bar.css';

function Bar({ size, isCurrent, isChecked }: {size: number, isCurrent: boolean, isChecked: boolean}) {
  let bgClass = 'bg-secondary';

  if (isCurrent) {
    bgClass = 'bg-accent';
  } else if (isChecked) {
    bgClass = 'bg-primary';
  }

  return (
    <div style={{height: `${size * 4}%` }} className={`bar rounded ${bgClass}`}></div>
  );
}

export default Bar;