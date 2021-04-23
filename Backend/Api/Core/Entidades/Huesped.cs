﻿using System.ComponentModel.DataAnnotations;

namespace Api.Core.Entidades
{
    public class Huesped : EntidadConId
    {
	    [Required, MaxLength(70)]
        public string NombreCompleto { get; set; }

        [Required, MinLength(3), MaxLength(30)]
        public string DniOPasaporte { get; set; }

        [MaxLength(35)]
        public string Telefono { get; set; }

        [MaxLength(256)]
        public string Email { get; set; }

        public string ObtenerNombreAbreviado()
        {
	        var primeraPalabra = NombreCompleto.Split(" ")[0];

	        if (primeraPalabra.Length <= 6)
		        return primeraPalabra;
	        
	        return primeraPalabra.Substring(0, 5) + "..";

        }
    }
}
