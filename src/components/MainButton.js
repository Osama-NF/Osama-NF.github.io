const colors= {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  gray: "bg-gray-700 hover:bg-gray-800",
  cyan: "bg-cyan-600 hover:bg-cyan-700",
  red: "bg-red-700 hover:bg-red-800",
  yellow: "bg-yellow-700 hover:bg-yellow-800",
}

export default function MainButton({text, bgColor, clickFunction}) { 
    return (
        <button 
        className={`px-6 py-3 ${colors[bgColor]} rounded-lg font-semibold transition`} 
        onClick={clickFunction}>
          {text}
        </button>
    )
}