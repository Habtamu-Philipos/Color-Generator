import { toast } from 'react-toastify'

function SingleColor({ color, index }) {
  const { hex, weight } = color
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('Color copied to clipboard')
      } catch (err) {
        toast.error('Failed to copy  the color to clipboard')
      }
    }
  }
  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value">#{hex}</p>
    </article>
  )
}

export default SingleColor
