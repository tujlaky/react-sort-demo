import './Bar.css';

function Bar({ size, isCurrent, isChecked }: {size: number, isCurrent: boolean, isChecked: boolean}) {
  let bgClass = 'secondary';

  if (isCurrent) {
    bgClass = 'accent';
  } else if (isChecked) {
    bgClass = 'primary';
  }

  return (
    <div style={{height: `${size * 4}%` }} className={`bar rounded bg-${bgClass}`}></div>
  );
}

export default Bar;