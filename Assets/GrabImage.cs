using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GrabImage : MonoBehaviour
{
    [SerializeField]
    Renderer r;
    // Start is called before the first frame update
    void Start()
    {
        // StartCoroutine(Pull());
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    IEnumerator Pull()
    {
        string imageurl = "https://meta.sadgirlsbar.io/images/07175_3YFrCvm1m7c7F1btFYaCRwGvDZCH.png";
        string url = "http://127.0.0.1:5500/Build/proxy.php?url=" + imageurl;
        var www = new WWW(url);
        yield return www;

        Texture2D t = new Texture2D(www.texture.width, www.texture.height, TextureFormat.DXT1, false);

        www.LoadImageIntoTexture(t);

        r.material.mainTexture = t;
    }
}
