import useFetch from "../../hooks/useFetch.js";
import LoadingSpinner from "../spinner/Spinner.jsx";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/hotels/countByType"
  );
  const images = [
    "https://media.istockphoto.com/photos/breakfast-served-on-a-hotel-bed-picture-id936331412?k=20&m=936331412&s=612x612&w=0&h=WeIEVoB9DarqRpcOg4UQ0pKCAQAGQIxsitd7cnIWXc8=",
    "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517?k=20&m=1184204517&s=612x612&w=0&h=EgsvQW1HYCldGu2kKf0tzkuoL1h5coYuQDHHQhfb1MA=",
    "https://media.istockphoto.com/photos/beachfront-bungalow-with-sea-view-picture-id1198357641?k=20&m=1198357641&s=612x612&w=0&h=rjKPN67ApG68wRWyvriAEenWdnrxm7St5f6_XN_aeUo=",
    "https://media.istockphoto.com/photos/luxurious-villa-with-pool-picture-id506903162?k=20&m=506903162&s=612x612&w=0&h=ynGHs5f4bq2Ok1DyvDNFHiyboIzAwHH5QJOzSw6oe1w=",
    "https://media.istockphoto.com/photos/oregon-forest-modern-log-cabin-picture-id185930591?k=20&m=185930591&s=612x612&w=0&h=DQ-cJfBuSbGkacGXDIq2M1SC6dWRTsWbrY1tvpb82aM=",
    "https://media.istockphoto.com/photos/french-brittany-typical-house-picture-id471826199?k=20&m=471826199&s=612x612&w=0&h=pLN-7epSOpONNCYSYbjS4rDg8fDTpVDRE7yiLG74Cbk=",
  ];
  return (
    <div className="property-list">
      {loading ? (
        <div className="property-list-spinner"><LoadingSpinner/></div>
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="property-list-item" key={i}>
                <img src={img} alt="" className="property-list-img" />
                <div className="property-list-title">
                  {/* ? check whether we have data or not */}
                  <h2>{data[i]?.type}</h2>
                  <p>
                    {data[i]?.count} {data[i]?.type}
                  </p>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
