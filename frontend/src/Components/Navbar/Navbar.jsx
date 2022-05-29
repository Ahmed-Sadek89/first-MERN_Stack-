import { Badge, MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Header = () => {
  return (
    <div className='navbar container'>
        <div className="part1">
          <select>
            <option>en</option>
            <option>ar</option>
          </select>
          <div className='search'>
            <input type='text' placeholder='Search..'/>
            <SearchIcon className='SearchIcon'/>
          </div>
        </div>
        <div className="part2">
          sadek.
        </div>
        <div className="part3">
          <button>
            regester
          </button>
          <button>
            signup
          </button>
          
          <Badge badgeContent={4} color="primary" className='badge' overlap="rectangular">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </div>
    </div>
  )
}

export default Header