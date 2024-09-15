export default function Banner({ message }: { message: string }) {
  return (
    
      <div className = "card">
        <h1 className="banner">{message}</h1>
      </div>
    );
}
