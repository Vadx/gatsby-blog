import React from "react"
import { Link } from "gatsby"

const Tags = ({ children }) =>
  children && (
    <ul style={{ marginBottom: 0, marginLeft: 0, display: "flex" }}>
      {children.map(t => (
        <li
          key={t}
          style={{
            borderRadius: "4px",
            padding: "2px 6px",
            margin: "0 5px 5px 0",
            fontSize: "80%",
            backgroundColor: "#eee",
            listStyle: "none",
            color: "#000",
          }}
        >
          <Link to={`/tags/${t}/`}>
            {t}
          </Link>
        </li>
      ))}
    </ul>
  )

export default Tags
