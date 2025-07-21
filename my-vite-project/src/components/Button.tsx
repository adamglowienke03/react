export function Button({ children, className, handleClick} :{ children?: React.ReactNode, clasName?: string, handleClick?: () => void }) {
  return (
    <button onClick={handleClick} className={className}>
      {children}
      
    </button>
  );
}