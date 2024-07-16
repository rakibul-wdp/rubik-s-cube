const categories = [
  {
    id: 1,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdfymvppav%2Fimage%2Fupload%2Fv1672980523%2Fuser_upload%2Fe1ih7k73sqzytjmnvmp5.webp&w=48&q=75",
    categoryName: "Accessories",
  },
  {
    id: 2,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia3tapgi%2Fimage%2Fupload%2Fv1662193996%2Fghqbc11el26g05hopnyl.png&w=48&q=75",
    categoryName: "Robot",
  },
  {
    id: 3,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia3tapgi%2Fimage%2Fupload%2Fv1662193971%2Fjzig7rx23ltqyjsrk7pt.png&w=48&q=75",
    categoryName: "Smart Cube",
  },
  {
    id: 4,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia3tapgi%2Fimage%2Fupload%2Fv1662193899%2Fezobbgv51dgrrqqvk1d3.png&w=48&q=75",
    categoryName: "3x3x3",
  },
  {
    id: 5,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia3tapgi%2Fimage%2Fupload%2Fv1662193905%2Fxscevx2x1n3e9eqhdi4e.png&w=48&q=75",
    categoryName: "2x2x2",
  },
  {
    id: 6,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia3tapgi%2Fimage%2Fupload%2Fv1662193890%2Fljy3itslzjkinu6ihlpk.png&w=48&q=75",
    categoryName: "4x4x4",
  },
  {
    id: 7,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia3tapgi%2Fimage%2Fupload%2Fv1662193881%2Fgckyevsuf3aunfq9g5xk.png&w=48&q=75",
    categoryName: "5x5x5",
  },
  {
    id: 8,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia3tapgi%2Fimage%2Fupload%2Fv1662193875%2Fayvnfjuz7yvya8dgzmcd.png&w=48&q=75",
    categoryName: "6x6x6",
  },
  {
    id: 9,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia3tapgi%2Fimage%2Fupload%2Fv1662193848%2Fkw6zvlrvvdazuspq6b3n.png&w=48&q=75",
    categoryName: "7x7x7",
  },
  {
    id: 10,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia3tapgi%2Fimage%2Fupload%2Fv1662193927%2Fn3tecpdbzg30mydfbopo.png&w=48&q=75",
    categoryName: "Other WCS Puzzle",
  },
  {
    id: 11,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia3tapgi%2Fimage%2Fupload%2Fv1662193868%2Fdvbdo7hpbcv41oxsaphb.png&w=48&q=75",
    categoryName: "7x7x7 Plus",
  },
  {
    id: 12,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia3tapgi%2Fimage%2Fupload%2Fv1662193859%2Fglvmmfwypwyafzziafwf.png&w=48&q=75",
    categoryName: "Non WCS Puzzle",
  },
  {
    id: 13,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia3tapgi%2Fimage%2Fupload%2Fv1662193938%2Fnoyjzaubroah3rreqpw5.png&w=48&q=75",
    categoryName: "Fidgets",
  },
  {
    id: 14,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia3tapgi%2Fimage%2Fupload%2Fv1662193947%2Frtvdg86s6q23bvl3ieun.png&w=48&q=75",
    categoryName: "CupStacking",
  },
  {
    id: 15,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia3tapgi%2Fimage%2Fupload%2Fv1662193955%2Fc9nq4fmkko8ozwp5apoa.png&w=48&q=75",
    categoryName: "Lubricant",
  },
  {
    id: 16,
    imageUrl:
      "https://cubenationshop.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia3tapgi%2Fimage%2Fupload%2Fv1662193965%2Fe3c36ylu5cj1hm4wimjv.png&w=48&q=75",
    categoryName: "Bundle",
  },
];

const Categories = () => {
  return (
    <div className="card bg-base-100">
      <div className="card-body">
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="card-title">Popular Categories</h2>
          <p>All the types of Puzzle & Speedcube we sell.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-24">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-center gap-5 border p-5 cursor-pointer"
            >
              <img src={category.imageUrl} alt="categories image" />
              <h4 className="hover:text-red-600">{category.categoryName}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
