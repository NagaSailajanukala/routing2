import React from "react";

function Profile() {
  const menu = [
    {
      name: "Aravind",
      id: 1,
      url: "https://wallpaperaccess.com/thumb/5242.jpg",
      designation: "Doctor",
    },
    {
      name: "Sai",
      id: 2,
      url: "https://wallpaperaccess.com/thumb/11073365.jpg",
      designation: "HouseSergon",
    },
    {
      name: "Ram",
      id: 3,
      url: "https://wallpaperaccess.com/thumb/5109856.jpg",
      designation: "Admin",
    },
    {
      name: "David",
      id: 4,
      url: "https://wallpaperaccess.com/thumb/176866.jpg",
      designation: "Doctor",
    },
    {
      name: "Lakshmi",
      id: 5,
      url: "https://wallpaperaccess.com/thumb/219241.jpg",
      designation: "Admin",
    },
    {
      name: "Raj",
      id: 6,
      url: "https://wallpaperaccess.com/thumb/332366.jpg",
      designation: "HouseSurgon",
    },
    {
      name: "Swati",
      id: 7,
      url: "https://wallpaperaccess.com/thumb/19355.jpg",
      designation: "Doctor",
    },
    {
      name: "Sunitha",
      id: 8,
      url: "https://wallpaperaccess.com/thumb/223952.jpg",
      designation: "Admin",
    },
    {
      name: "Sowmya",
      id: 9,
      url: "https://wallpaperaccess.com/thumb/1667337.jpg",
      designation: "HouseSurgon",
    },
    {
      name: "Swati",
      id: 10,
      url: "https://wallpaperaccess.com/thumb/19355.jpg",
      designation: "Doctor",
    },
    {
      name: "Sunitha",
      id: 11,
      url: "https://wallpaperaccess.com/thumb/223952.jpg",
      designation: "Admin",
    },
    {
      name: "Sowmya",
      id: 12,
      url: "https://wallpaperaccess.com/thumb/1667337.jpg",
      designation: "HouseSurgon",
    },
    {
      name: "Swati",
      id: 13,
      url: "https://wallpaperaccess.com/thumb/19355.jpg",
      designation: "Doctor",
    },
    {
      name: "Sunitha",
      id: 14,
      url: "https://wallpaperaccess.com/thumb/223952.jpg",
      designation: "Admin",
    },
    {
      name: "Sowmya",
      id: 15,
      url: "https://wallpaperaccess.com/thumb/1667337.jpg",
      designation: "HouseSurgon",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
      {menu.map((item) => {
        return (
          <div>
            <img
              className="h-64 sm:w-64 rounded w-full mx-auto"
              src={item.url}
              alt={item.name}
              key={item.id}
            />
            <div>
              <h6 className="flex justify-center items-center">Name: {item.name}</h6>
              <h6 className="flex justify-center items-center">Designation: {item.designation}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
