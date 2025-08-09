import rigoImageUrl from "../assets/img/rigo-baby.jpg";

export const CardNave = (props) => (
    <>
 		<div className="text-center mt-5">
				<div className="card" style={{width: "18rem"}}>
				<img src={rigoImageUrl}  className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">ID {props.uid} </p>
				</div>
			 </div>
 		</div>
    </>
);